import React, { useEffect } from 'react'
import styled, { withTheme } from 'styled-components'

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const GraphCanvas = styled.canvas`
  border: 1px solid black;
  margin-bottom: 10px;
`

let data = {
  Austrailia: 1000,
  India: 2700,
  USA: 500,
  Brasil: 2100,
  China: 3000
}

const entries = Object.entries(data)

const Layout = () => {
  useEffect(() => {
    let canvasElem = document.querySelector('canvas')
    canvasElem.width = 1000
    canvasElem.height = 500
    const ctx = canvasElem.getContext('2d')
    let xGrid = 10
    let yGrid = 10
    let cellSize = 10
    drawGrid(canvasElem, ctx, xGrid, yGrid, cellSize)
    drawAxis(ctx)
    drawChart(ctx)
  })

  const drawGrid = (canvasElem, ctx, xGrid, yGrid, cellSize) => {
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

  return (
    <GraphContainer>
      <GraphCanvas onClick={e => {}}></GraphCanvas>
      <form>
        <input />
        <input />
      </form>
    </GraphContainer>
  )
}

export default Layout
