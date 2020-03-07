import React, { Component } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'

const _ = require('lodash')

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: #f5f6f7;
`

const CrawlingContainer = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100vw;
  z-index: 4;
`

const PageView = styled.div`
  font-family: 'escore9';
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100px;
  height: 30px;
  background: black;
  color: white;
  top: 40px;
  right: 0;
  z-index: 10;
`

const SearchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 80vw;
  height: 40px;
  border-radius: 20px;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.7);
`

const SearchIcon = styled.img`
  padding-left: 40px;
  width: 20px;
  height: 20px;
`

const SearchingForm = styled.form`
  padding-left: 40px;
  width: 100%;
`

const SearchingInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-family: 'escore9';
  color: white;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`

const DescriptionContainer = styled.div`
  z-index: -1;
  color: black;
  font-family: 'escore4';
  font-size: 10px;
  margin: 20px 10% 10px 10%;
  text-align: center;
  text-shadow: 1px 1px white;

  & > div {
    margin-bottom: 5px;
  }

  & > div:nth-child(3) {
    margin-top: 15px;
  }
`

const ButtonContainer = styled.div`
  color: black;
  display: flex;
  text-shadow: 1px 1px white;

  & > div {
    font-family: 'escore6';
    background: none;
    border: 2px solid black;
    box-shadow: 1px 1px white;
    padding: 4px;
    margin: 2px;
    cursor: pointer;
  }
`

const ContentsContainer = styled.div`
  position: relative;
  margin-top: 20px;
`

class Layout extends Component {
  state = {
    searchingName: '',
    page: 1,
    imageNumber: 0,
    imageMaxNumber: 0,
    gridmode: 4,
    result_arr: []
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      _.debounce(() => {
        // console.log('imageNumber', imageNumber)
        // console.log('imagemaxnumber', imageMaxNumber)
        if (
          window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 260 &&
          this.state.imageMaxNumber >= this.state.imageNumber
        ) {
          this.setState(
            {
              page: this.state.page + 1
            },
            () => this.crawling()
          )
        }
      }, 1000)
    )
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState(
      {
        result_arr: [],
        imageNumber: 0,
        imageMaxNumber: 0,
        page: 1
      },
      () => {
        this.crawling()
      }
    )
  }

  crawling = () => {
    const cheerio = require('cheerio')
    const url = `https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/search.php?search=${this.state.searchingName}&page=${this.state.page}`
    // console.log(url)
    fetch(url)
      .then(res => {
        return res.text()
      })
      .then(text => {
        const $ = cheerio.load(text)
        let json = [],
          id,
          link,
          img
        const maxNum = Number(
          $('#page_container > h1')
            .text()
            .split(' ')[8]
        )
        if (window.innerWidth < 1070) {
          $('#page_container > div:nth-child(6) > div.thumb-container').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > a.wallpaper-thumb > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        } else {
          $('#page_container > div:nth-child(6) > div.thumb-container-big').each(function(i, elem) {
            id = i
            link = $(this)
              .find('div.thumb-container > div.boxgrid > a')
              .attr('href')
            img = $(this)
              .find('div.thumb-container > div.boxgrid > a > img')
              .attr('data-src')
            json.push({ id: id, link: link, img: img })
          })
        }
        if (this.state.imageMaxNumber >= this.state.imageNumber) {
          this.setState({
            result_arr: this.state.result_arr.concat(json),
            imageMaxNumber: maxNum,
            imageNumber: this.state.imageNumber + 30
          })
        }
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <BackgroundContainer>
        <CrawlingContainer>
          <ContentsMenubar name="crawling" />
          <PageView>
            {this.state.imageNumber <= this.state.imageMaxNumber ? (
              <>{this.state.imageNumber + '/' + this.state.imageMaxNumber}</>
            ) : (
              <>Last</>
            )}
          </PageView>
          <SearchingContainer>
            <SearchIcon src="search_icon.png" />
            <SearchingForm onSubmit={this.submitHandler}>
              <SearchingInput
                autoFocus
                name="searchingName"
                type="text"
                placeholder="keyword"
                onChange={e => {
                  this.setState({
                    searchingName: e.target.value
                  })
                }}
                value={this.state.searchingName}
              ></SearchingInput>
            </SearchingForm>
          </SearchingContainer>
          <DescriptionContainer>
            <div>
              데스크탑 이용 시,{' '}
              <span style={{ color: 'blue', fontFamily: 'escore7' }}>width가 1070 이상</span>이어야
              원활한 사용이 가능합니다.
            </div>
            <div>
              검색어는 <span style={{ color: 'red', fontFamily: 'escore7' }}>영어</span>로
              입력하세요.
            </div>
            <div>
              FROM{' '}
              <a
                style={{ fontFamily: 'escore7' }}
                href="https://wall.alphacoders.com/"
                target="_blank"
              >
                alphacoders.com
              </a>
            </div>
          </DescriptionContainer>
          <ButtonContainer>
            <div
              onClick={() => {
                this.setState({
                  gridmode: 2
                })
              }}
            >
              2개씩보기
            </div>
            <div
              onClick={() => {
                this.setState({
                  gridmode: 4
                })
              }}
            >
              4개씩보기
            </div>
            <div
              onClick={() => {
                this.setState(
                  {
                    gridmode: 10,
                    page: this.state.page + 1
                  },
                  () => this.crawling()
                )
              }}
            >
              10개씩보기
            </div>
          </ButtonContainer>
        </CrawlingContainer>
        <ContentsContainer>
          {this.state.gridmode === 2 &&
            this.state.result_arr.map((item, i) => (
              <a key={i} href={'https://wall.alphacoders.com/' + item.link} target="_blank">
                <img style={{ width: '50%' }} src={item.img}></img>
              </a>
            ))}
          {this.state.gridmode === 4 &&
            this.state.result_arr.map((item, i) => (
              <a key={i} href={'https://wall.alphacoders.com/' + item.link} target="_blank">
                <img style={{ width: '25%' }} src={item.img}></img>
              </a>
            ))}
          {this.state.gridmode === 10 &&
            this.state.result_arr.map((item, i) => (
              <a key={i} href={'https://wall.alphacoders.com/' + item.link} target="_blank">
                <img style={{ width: '10%' }} src={item.img}></img>
              </a>
            ))}
        </ContentsContainer>
      </BackgroundContainer>
    )
  }
}

export default Layout
