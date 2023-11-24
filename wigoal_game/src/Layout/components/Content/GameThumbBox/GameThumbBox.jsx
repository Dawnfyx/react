import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Avatar, Button, Card, Image, Space} from "antd";

const {Meta} = Card;

import './GameThumbBox.less'

const GameThumbBox = (props) => {
    const {loading, link, url, name} = props;
    // debugger
    return (
        <Link className="game_thumb_box" to={link}>
            {/*<Card*/}
            {/*    loading={loading}*/}
            {/*    hoverable*/}
            {/*    cover={<img alt="example" src={'http://test.ads-goal.com' + item.icon}/>}*/}
            {/*>*/}
            {/*    <Meta*/}
            {/*        title="Card title"*/}
            {/*        description="This is the description"*/}
            {/*    />*/}
            {/*</Card>*/}
            <div className="game_thumb_box_title">
                {name}
            </div>
            <Image
                className="game_thumb_box_img"
                preview={false}
                src={'http://test.ads-goal.com' + url}
                placeholder={
                    <Image
                        preview={false}
                        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAIAAAD1h/aCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMS0yMlQxNTowNTo1MiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OGU3NWM0ZTAtYWY5Ny0wMDQ3LTg0MWEtOTY5NGQ3ZjlkZTM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhlNzVjNGUwLWFmOTctMDA0Ny04NDFhLTk2OTRkN2Y5ZGUzOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhlNzVjNGUwLWFmOTctMDA0Ny04NDFhLTk2OTRkN2Y5ZGUzOCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGU3NWM0ZTAtYWY5Ny0wMDQ3LTg0MWEtOTY5NGQ3ZjlkZTM4IiBzdEV2dDp3aGVuPSIyMDIzLTExLTIyVDE1OjA1OjUyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2XbunwAABFpJREFUeJzt1DENACEAwEDAB2z4t/gaOpFP7hR06tznDoBivQ4A/sc4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gMw4gOwDVaYDMAQPF30AAAAASUVORK5CYII="
                    />
                }
            />
        </Link>

    )
};

export default GameThumbBox;