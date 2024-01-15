import { useReducer, useState } from 'react';
import Background from '#archichecture/component/background/Background';
import Table_page from '#archichecture/pages/table_page/Table_page';
import React from 'react';
import { CommonContext } from '#reducers/common/context'
import { CommonReduser } from '#reducers/common/reduser'
import { initialCommon } from '#reducers/common/state'
import LightDarkController from '#archichecture/component/ligihtDarkController/LightDarkController';
import { Light_dark_themes_E } from '#constants/common-base/constNames'
import { dark,light } from '#constants/colors'

window.addEventListener('beforeunload', () => {
  // Notify the server when the user is leaving the site
  // socket.emit('userLeave');
  fetch('localhost:5000', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify('user left site')
  })
})

const App: React.FC = () => {
  const [state, dispatch] = useReducer(CommonReduser, initialCommon)
  const darkLightTheme = Light_dark_themes_E.DARK === state.lightDarkTheme

  


  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      <div className="App"
        style={darkLightTheme? dark : light}
      >
        <LightDarkController/>
        <Table_page/>
        {/* <Background/> */}
      </div>
    </CommonContext.Provider>
  );
}

export default App;


