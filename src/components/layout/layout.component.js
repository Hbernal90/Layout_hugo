import React, { useState, useEffect } from 'react';

import LayoutBlock from './layout-block/layout-block';
import LayoutControls from './layout-controls/layout-controls';
import './layout.styles.scss';

const Layout = () => {

    const [board, setBoard] = useState([
        [
            {
                chair: false
            }
        ]
    ])

    const [dimensions, setDimensions] = useState({
        rows: 1,
        columns: 1
    })

    useEffect(() => {
        console.log("BOARD", board)
        /* setDimensions({
            ...dimensions,
            rows: board.length,
            columns: board[0].length
        }) */
    }, [board])

    const decreaseDimension = (evt) => {
        const name = evt.target.name ? evt.target.name : evt.target.parentNode.name;
        let newBoard = [...board];
        if (name === "columns" && newBoard[0].length - 1 >= 1) {
            newBoard.map(e => e).map(e => {
                return e.pop();
            })
        } else if (name === "rows" && newBoard.length - 1 >= 1) {
            newBoard.pop();
        }
        setBoard(newBoard);
        setDimensions({
            rows: newBoard.length,
            columns: newBoard[0].length
        })
    }

    const changeDimension = (evt, value) => {
        const name = evt.target.name ? evt.target.name : evt.target.parentNode.name;

        if (value >= 1) {
            let newBoard = [...board];
            let newElement = []
            if(name === "columns") {
                newBoard.map(element => {
                    return element.push({chair: false})
                })
            } else {
                newBoard[0].map(() => {
                    return newElement.push({chair: false})
                })
                newBoard.push(newElement);
            }
            setBoard(newBoard);
            setDimensions({
                rows: newBoard.length,
                columns: newBoard[0].length
            })
        }
    }

    const setChair = (row, column) => {
        let newBoard = [...board];
        newBoard[row][column].chair = !newBoard[row][column].chair; 
        setBoard(newBoard);
    }

    let gridTemplateColumns = '';

    for(let i = 0; i < dimensions.columns; i++){
        gridTemplateColumns += '50px '
    }

    let auxBoard = [];

    for(let i = 0; i < board.length; i++){
        auxBoard.push([]);
        for(let j = 0; j < board[i].length; j++) {
            auxBoard[i].push(<LayoutBlock key={`${i}-${j}`} row={i} column={j} 
                chair={board[i][j].chair} setChair={setChair}/>)
        }
    }

    return (
        <div className="block__layout">
            <div className="block__board">
                <div className="board" style={{gridTemplateColumns}}>
                    {auxBoard.map(row => row).map(column => column)}
                </div>
            </div>
            <div className="block__controls">
                <LayoutControls columns={dimensions.columns} rows={dimensions.rows} 
                    decreaseDimension={decreaseDimension} changeDimension={changeDimension} />
            </div>
        </div>
    )

}

export default Layout;