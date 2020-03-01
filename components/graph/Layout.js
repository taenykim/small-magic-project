import React, { useEffect, useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'
import { useSelector } from 'react-redux'

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  border-radius: 3px;
  box-shadow: -4px -2px 4px 0px white, 4px 2px 6px 0px #dfe4ea;
`

const GraphCanvas = styled.canvas`
  border: 1px solid black;
  margin: 0px 30px 30px 30px;
`

const Layout = () => {
  const data = useSelector(state => state.graph)
  const [graphData, setGraphData] = useState(
    data.graphData || {
      Austrailia: 1000,
      India: 2700,
      USA: 500,
      Brasil: 2100,
      China: 3000
    }
  )
  const entries = Object.entries(graphData)

  const [country, setCountry] = useState(data.country || '')
  const [population, setPopulation] = useState(data.population || '')
  const inputRef = useRef()

  useEffect(() => {
    let canvasElem = document.querySelector('canvas')
    canvasElem.width = 840
    canvasElem.height = 420
    const ctx = canvasElem.getContext('2d')
    drawGrid(canvasElem, ctx)
    drawAxis(ctx)
    drawChart(ctx)
    // canvasElem.addEventListener('mousemove', e => {
    //   if (e.clientX < 203 && e.clientX > 198 && e.clientY > 384 && e.clientY < 388) {
    //     console.log('here')
    //   }
    //   console.log(e.clientX, e.clientY)
    // })
  })

  const drawGrid = (canvasElem, ctx) => {
    let xGrid = 10
    let yGrid = 10
    let cellSize = 10
    ctx.beginPath()
    while (xGrid < canvasElem.height) {
      ctx.moveTo(0, xGrid)
      ctx.lineTo(canvasElem.width, xGrid)
      xGrid += cellSize
    }
    while (yGrid < canvasElem.width) {
      ctx.moveTo(yGrid, 0)
      ctx.lineTo(yGrid, canvasElem.height)
      yGrid += cellSize
    }
    ctx.strokeStyle = 'gray'
    ctx.stroke()
  }

  const drawAxis = ctx => {
    let yPlot = 400
    let pop = 0

    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(50, 50)
    ctx.lineTo(50, 400)
    ctx.lineTo(800, 400)
    ctx.moveTo(50, 400)

    for (let i = 0; i < 10; i++) {
      ctx.strokeText(pop, 20, yPlot)
      pop += 500
      yPlot -= 50
    }
    ctx.stroke()
  }

  const drawChart = ctx => {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(50, 400)

    var xPlot = 100

    for (const [country, population] of entries) {
      var populationInBlocks = population / 10
      ctx.strokeText(country, xPlot, 400 - populationInBlocks - 10)
      ctx.lineTo(xPlot, 400 - populationInBlocks)
      ctx.arc(xPlot, 400 - populationInBlocks, 2, 0, Math.PI * 2, true)
      xPlot += 50
    }
    ctx.stroke()
  }

  const submitHandler = e => {
    e.preventDefault()
    let obj = { ...graphData }
    console.log(country)
    obj[country] = population
    // obj.county = population not same!!
    let graphData_temp = Object.assign({}, obj)
    setGraphData(graphData_temp)
    setCountry('')
    setPopulation('')
    inputRef.current.focus()
  }

  return (
    <GraphContainer>
      <ContentsMenubar data={{ graphData, country, population }} name="graph" />
      <GraphCanvas onClick={e => {}}></GraphCanvas>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          value={country}
          onChange={e => {
            setCountry(e.target.value)
          }}
        />
        <input
          value={population}
          onChange={e => {
            setPopulation(e.target.value)
          }}
        />
        <button type="submit" />
      </form>
    </GraphContainer>
  )
}

export default Layout
