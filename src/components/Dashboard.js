import React from 'react'
import { Route, Switch } from 'react-router'
import Academics from './dashboardComp/Academics'
import Fee from './dashboardComp/Fee'
import Info from './dashboardComp/Info'
import DashboardNav from './DashboardNav'

const Dashboard = () => {
    return (
        <>
            <div className="container dashboard mt-5">
                <div className="card_container row">
                    <div className="student_info_left col-md-4 ">
                        <div className="profile_pic mt-3 mb-5">
                            <img src="" alt="ProfilePic" />
                        </div>
                        <div className="profile_details">
                            <h6>Name:Apoorv Joshi</h6>
                            <h6>Course:B.tech CSE</h6>
                            <h6>Sem:6 <sup>th</sup> </h6>
                        </div>
                    </div>
                    <div className="student_info_right col-md-8">
                        <DashboardNav/>
                        
                        <Switch>
                            <Route path="/info">
                                <Info/>
                            </Route>

                            <Route path="/academics">
                                <Academics/>
                            </Route>

                             <Route path="/fee">
                                <Fee/>
                            </Route>
                        
                        </Switch>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Dashboard
