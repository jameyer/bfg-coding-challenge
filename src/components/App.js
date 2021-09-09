import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListContainer from './ui/ListContainer.js';
import AddItem from './ui/AddItem';

import CodeChallenge from './ui/CodeChallenge.js';

import theme from './ui/theme.js';
import Header from './ui/Header';
import { getList } from '../util/helpers.js';

function App() {
    const [books, setBooks] = useState('');
    const [movies, setMovies] = useState('');

    useEffect(() => {
        getList('./data.json').then((library) => {
            setBooks(library.books);
            setMovies(library.movies);
        });
    }, []);

    const addToLibrary = (type, title, author) => {
        let prevState;
        if (type === 'book') {
            prevState = [...books];
            prevState.push({ title, author });
            setBooks(() => [...prevState]);
        }
        if (type === 'movie') {
            prevState = [...movies];
            prevState.push({ title, director: author });
            setMovies(() => [...prevState]);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={() => (
                            <ListContainer books={books} movies={movies} />
                        )}
                    />
                    <Route
                        path='/add'
                        component={() => (
                            <AddItem addToLibrary={addToLibrary} />
                        )}
                    />
                    <Route
                        exact
                        path='/about'
                        component={() => <CodeChallenge />}
                    />
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
