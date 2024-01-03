import { useReducer } from 'react';
import Background from '#archichecture/component/background/Background';
import Table_page from '#archichecture/pages/table_page/Table_page';
import React from 'react';
import { GameContext } from "#reducers/context"
import { TicTacReducer } from './reducers/reduser'
import { initialGameState } from './reducers/state'



const App: React.FC = () => {
 
  const [state, dispatch] = useReducer(TicTacReducer, initialGameState)
  
  return (
    <GameContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Table_page/>
        {/* <Background/> */}
      </div>
    </GameContext.Provider>
      

    
  );
}

export default App;


