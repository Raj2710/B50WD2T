import React from 'react'
export const DashboardDataContext = React.createContext(null)
function DashboardContext({children}) {
    let dashboardData = [{
        color:'primary',
        icon:'fa-calendar',
        title:'Earnings (Monthly)',
        value:'$40,000'
    },
    {
        color:'success',
        icon:'fa-dollar-sign',
        title:'Earnings (Annual)',
        value:'$2,15,000'
    },
    {
        isProgress:true,
        color:'info',
        icon:'fa-clipboard-list',
        title:'Tasks',
        value:'50'
    },
    {
        color:'warning',
        icon:'fa-comments',
        title:'Pending Requests',
        value:'18'
    }
    ]
  return <DashboardDataContext.Provider value={{dashboardData}}>
        {children}
  </DashboardDataContext.Provider>
}

export default DashboardContext