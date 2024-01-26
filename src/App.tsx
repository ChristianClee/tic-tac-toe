import { useEffect, useReducer, useRef, useState } from 'react';
import Background from '#archichecture/component/background/Background';
import Table_page from '#archichecture/pages/table_page/Table_page';
import React from 'react';
import { CommonContext } from '#reducers/common/context'
import { CommonReduser } from '#reducers/common/reduser'
import { initialCommon } from '#reducers/common/state'
import LightDarkController from '#archichecture/component/ligihtDarkController/LightDarkController';
import { Light_dark_themes_E } from '#constants/common-base/constNames'
import { dark, light } from '#constants/colors'
import { Session_st_E } from "#constants/tic-tac-toe-base/constNames";
import { WebSocketInit } from '#commonUtilits/websocket';


export const socket = new WebSocketInit()


const App: React.FC = () => {
  const [state, dispatch] = useReducer(CommonReduser, initialCommon)
  const darkLightTheme = Light_dark_themes_E.DARK === state.lightDarkTheme


  setTimeout(() => {
    console.log(`test connection to websocket = ${socket.isConnect}`)
  },3000)


  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      <div className="App"
        style={darkLightTheme ? dark : light}
      >
        <LightDarkController/>
        <Table_page/>
        {/* <Background/> */}
      </div>
    </CommonContext.Provider>
  );
}

export default App;


