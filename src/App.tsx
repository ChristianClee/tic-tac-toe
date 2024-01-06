import { useReducer } from 'react';
import Background from '#archichecture/component/background/Background';
import Table_page from '#archichecture/pages/table_page/Table_page';
import React from 'react';
import { CommonContext } from '#reducers/common/context'
import { CommonReduser } from '#reducers/common/reduser'
import { initialCommon } from '#reducers/common/state'




const App: React.FC = () => {
  const [state, dispatch] = useReducer(CommonReduser, initialCommon)

  return (
    <CommonContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Table_page/>
        {/* <Background/> */}
      </div>
    </CommonContext.Provider>
  );
}

export default App;


