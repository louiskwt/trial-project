import {useContext, useReducer, useEffect, createContext} from "react";
// import axios api set up
import ArticlesAPI from "../api/articles";

// Create the context to manage the state for articles

const ArticlesContext = createContext();

// export the context
export function useArticle() {
    return useContext(ArticlesContext)
}

// Initial articles state
const initialState = {
    lang: 'en',
    recentArticles: null,
    sponsoredArticles: null
}

// Action constant
const ACTIONS = {
    CHANGE_LANG: 'change-lang',
    LOAD_ARTICLES: 'load-recent',
}

// Article reducer
const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.CHANGE_LANG:
            return {
                ...state,
                lang: action.lang
            };
        case ACTIONS.LOAD_ARTICLES:
            return {
                ...state,
                recentArticles: action.res.data.recentArticles,
                sponsoredArticles: action.res.data.sponsoredArticles
            };
        default:
            return state
    }
}


// Export Articles context provider
export function ArticlesContextProvider({children}) {
    // articles reducer
    const [articles, dispatch] = useReducer(reducer, initialState)

    // Change language
    const changeLang = (lang) => {
        dispatch({type: ACTIONS.CHANGE_LANG, lang});
    }

    // fetch articles with useEffect
    useEffect(() => {
        let fetchArticle;
        if(articles.lang === 'en') {
            // set up fetchArticle function according to lang
             fetchArticle = async () => {
                try {
                    // fetch English articles from api
                    const res = await ArticlesAPI.get('/');
                    dispatch({ type: ACTIONS.LOAD_ARTICLES, res });
                } catch (error) {
                    // Handle error
                    console.log(error.message)
                }
            }
        }

        if(articles.lang === 'zh') {
            // set up fetchArticle function according to lang
            fetchArticle = async () => {
                try {
                    // fetch Contonese articles from api
                    const res = await ArticlesAPI.get('/zh');
                    dispatch({ type: ACTIONS.LOAD_ARTICLES, res });
                } catch (error) {
                    // Handle error
                    console.log(error.message)
                }
            }
        }
        // Run the fetch Article function
        fetchArticle();

    }, [articles.lang])

    // values that will be passed on to child components 
    const value = {changeLang, articles}

    return (
        <ArticlesContext.Provider value={value} >
            {children}
        </ArticlesContext.Provider>
    )
}