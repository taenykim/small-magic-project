export const initialState = {
  text: 'welcome to my page',
  imageOn: '',
  imageOnWidth: '',
  imageOnHeight: '',
  downloadHref: '',
  textFontSize: ''
}

export const STORE_JJAL_DATA = 'STORE_JJAL_DATA'
export const STORE_RESET_JJAL = 'STORE_RESET_JJAL'

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_JJAL_DATA: {
      console.log(action)
      return {
        text: action.data.text,
        imageOn: action.data.imageOn,
        imageOnWidth: action.data.imageOnWidth,
        imageOnHeight: action.data.imageOnHeight,
        downloadHref: action.data.downloadHref,
        textFontSize: action.data.textFontSize
      }
    }
    case STORE_RESET_JJAL: {
      return {
        text: 'welcome to my page',
        imageOn: '',
        imageOnWidth: '',
        imageOnHeight: '',
        downloadHref: '',
        textFontSize: ''
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
