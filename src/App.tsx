import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {setAppErrorAC, initializeAppTC} from "./redux/app-reducer";
import ToggleIsFetching from "./components/common/ToggleIsFetching";
import store from "./redux/redux-store";
import {withSuspence} from "./hoc/withSuspence";
import {ErrorSnackbar} from "./components/common/ErrorSnackbar";
import BestFriends from "./components/BestFrieds/BestFriends";



// Этот компонент загружается динамически
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";


class App extends React.Component<any, any> {
//необходимо задиспачить тут ошибку которую нужно создать в app reducer 47 минута
    catchAllUnhandledErrors = (reason: any, promise: any) => {
        this.props.setAppErrorAC("error")
        console.log(this.props.error)
    }

    componentDidMount() {
        this.props.initializeAppTC()


        // @ts-ignore
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)

    }

    render() {
        if (!this.props.initialized) {
            return <ToggleIsFetching/>
        }
        return (

            <div className={styles.appWrapper}>
                {this.props.error !== " " && <ErrorSnackbar/>}

                <HeaderContainer/>
                <Navbar/>
                <div className={styles.appWrapperContent}>
                    <Route
                        exact
                        path="/dialogs"
                        //вариант загрузки DialogsComponent с HOC withSuspence
                        render={withSuspence(DialogsContainer)}
                    />

                    <Route
                        path='/profile/:userId?'
                        render={() =>
                            //вариант загрузки DialogsComponent без HOC withSuspence
                            <React.Suspense fallback={<ToggleIsFetching/>}>
                                <div>
                                    <ProfileContainer/>
                                </div>
                            </React.Suspense>
                        }
                    />
                    <Route path="/users" render={() => <UsersContainer pageTitle={'Logists'}/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>


                </div>
                {/*<Navbar/>*/}
                <div className={styles.asside} >
<BestFriends/>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized,
    error:state.app.error
})

export let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC,setAppErrorAC}))(App);

export const SocialTSApp = (props: any) => {
    return (<HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>)
}

