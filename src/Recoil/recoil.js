import { atom } from "recoil";


export const isAuthenticatedState = atom({
    key: 'isAuthenticatedState',
    default: false, // Initialize as not authenticated
  });

  export const WebViewUrl = atom({
    key : "WebViewUrl" ,
    default : false
  })
  