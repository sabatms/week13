import './App.css'

import React, { useState } from 'react'

const TabsComponent = () => {
    const [activetab ,setActivetab] = useState(1)
    
    const renderContent = () =>{
        switch (activetab) {
            case 1:
              return "Content 1: This is the first tab content.";
            case 2 :
             return "Content 2: This is the second tab content.";
            case 3 :
            return "Content 3 : This is the third tab content.";
            case 4:
            return "Content 4 : This is the fourth tab content.";
            default:
            return "";
        }
    }


  return (
    <>
      <h1>Tabs Component Whit React : </h1>
      <br />
      <br />
    <div className='Tabs'>
     <button onClick={() => setActivetab(1)}  className={activetab === 1 ? "active" : ""}>Tab1</button>
     <button onClick={() => setActivetab(2) } className={activetab === 2 ? "active" : ""}>Tab2</button>
     <button onClick={() => setActivetab(3) } className={activetab === 3 ? "active" : ""}>Tab3</button>
     <button onClick={() => setActivetab(4) } className={activetab === 4 ? "active" : "" }>Tab4</button>
    </div>
    <div className="content">
        <p>{renderContent()}</p>
      </div>
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste eveniet veritatis culpa assumenda iusto cum non sequi suscipit quasi tempore, impedit, accusamus ullam ipsa ut, neque placeat architecto enim molestiae.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eos dicta architecto atque earum labore obcaecati. Eaque, odio nemo nihil enim omnis exercitationem sunt tempora vero, iure sapiente ullam rem.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta reiciendis odio eos eveniet consequatur est quaerat numquam quia, nemo dignissimos odit reprehenderit ipsum dicta amet quo esse necessitatibus voluptas.
    </>


  )
}

export default TabsComponent