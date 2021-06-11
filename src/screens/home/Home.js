import React from "react";
import "./Home.css";
import Header from "../../common/Header/Header.js"
import GridListBanner from "../../common/GridListBanner";
import Movielistdisplay from "../../common/Movielistdisplay";
import {FormControl,InputLabel ,Input,} from '@material-ui/core';
import MovieFilter from "../../common/MovieFilter";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="upcoming">
                    <span>Upcoming Movies</span>
                </div>
                <GridListBanner />
                <div className="flex-container">
                    <div className="left">
                        <Movielistdisplay />
                    </div>
                    <div className="right">
                    <MovieFilter />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
