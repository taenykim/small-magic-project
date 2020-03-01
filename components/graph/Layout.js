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
  margin: 0px 30px 0px 30px;
`

const GraphForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 10px 0px;
  & > button {
    cursor: pointer;
    font-size: 8px;
    color: #fff;
    font-family: escore5;
    border-radius: 3px;
    background: #888;
    padding: 3px 6px 3px 6px;
  }
  & > label {
    font-size: 10px;
    margin: 0px 10px 0px 10px;
    font-family: escore8;
    color: black;
  }
  & > input {
    border-radius: 3px;
  }
`

const ErrorMessageElem = styled.div`
  color: red;
  align-self: center;
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
  const [country2, setCountry2] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef1 = useRef()
  const inputRef2 = useRef()

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
    ctx.strokeStyle = '#ccc'
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
    ctx.font = 'bold normal 10px Verdana'

    var xPlot = 100

    for (const [country, population] of entries) {
      var populationInBlocks = population / 10
      ctx.fillText(country + '(' + population + ')', xPlot, 400 - populationInBlocks - 10)
      ctx.lineTo(xPlot, 400 - populationInBlocks)
      ctx.arc(xPlot, 400 - populationInBlocks, 2, 0, Math.PI * 2, true)
      xPlot += 50
    }
    ctx.stroke()
  }

  const submitHandler1 = e => {
    console.log(graphData)
    e.preventDefault()

    if (isNaN(Number(population)) || Number(population) > 3500 || Number(population) < 0) {
      setErrorMessage('0~3500사이의 값을 입력하세요.')
      return
    }
    let obj = { ...graphData }
    obj[country] = Number(population)
    // obj.county = population not same!!
    let graphData_temp = Object.assign({}, obj)
    setGraphData(graphData_temp)
    setCountry('')
    setPopulation('')
    setErrorMessage('')
    inputRef1.current.focus()
  }

  const submitHandler2 = e => {
    e.preventDefault()
    let obj = { ...graphData }
    if (Object.keys(obj).indexOf(country2) < 0) {
      setErrorMessage('해당 키가 없습니다.')
      return
    }
    delete obj[country2]
    // obj.county = population not same!!
    let graphData_temp = Object.assign({}, obj)
    setGraphData(graphData_temp)
    setCountry2('')
    setPopulation('')
    setErrorMessage('')
    inputRef2.current.focus()
    console.log(graphData_temp)
  }

  return (
    <GraphContainer>
      <ContentsMenubar data={{ graphData, country, population }} name="graph" />
      <GraphCanvas onClick={e => {}}></GraphCanvas>

      <GraphForm onSubmit={submitHandler1}>
        <button type="submit">추가/수정하기</button>

        <label htmlFor="country">키</label>
        <input
          name="country"
          ref={inputRef1}
          value={country}
          onChange={e => {
            setCountry(e.target.value)
          }}
        />
        <label htmlFor="population">값</label>
        <input
          name="population"
          value={population}
          onChange={e => {
            setPopulation(e.target.value)
          }}
        />
      </GraphForm>
      <GraphForm onSubmit={submitHandler2}>
        <button type="submit">삭제하기</button>

        <label htmlFor="country">키</label>
        <input
          name="country"
          ref={inputRef2}
          value={country2}
          onChange={e => {
            setCountry2(e.target.value)
          }}
        />
      </GraphForm>
      <ErrorMessageElem>{errorMessage}</ErrorMessageElem>
    </GraphContainer>
  )
}

export default Layout
