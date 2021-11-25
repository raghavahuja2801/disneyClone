/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import ImgSlider from './imageSlider';
import NewDisney from './NewDIsney';
import Orignals from './Orignals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import {useDispatch,useSelector} from 'react-redux';
import db  from '../firebase';
import { selectRecommend, setMovies } from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice';
import { useEffect } from "react";
import { collection , doc, onSnapshot } from '@firebase/firestore';
import { useHistory } from 'react-router';




    const Home = (props) => {
      const dispatch = useDispatch();
      const movie = useSelector(selectRecommend);
      const userName = useSelector(selectUserName);
      let recommends = [] ;
      let newDisneys = [] ;
      let originals = [] ;
      let trending = [] ;


      
    const sortMovieData = ()=>{
      onSnapshot(collection(db,'movies'),(snap)=>{
          snap.docs.map((doc)=>{
              switch (doc.data().type) {
                  case 'recommend':
                          recommends = [...recommends, { id: doc.id, ...doc.data() }];
                          break;
                      case 'new':
                          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                          break;
                      case 'original':
                          originals = [...originals, { id: doc.id, ...doc.data() }];
                          break;
                      case 'trending':
                          trending = [...trending, { id: doc.id, ...doc.data() }];
                          break;
              }
          });
          dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            trending: trending,
            original : originals,
        }));

      });
    };


    useEffect(()=> {
        sortMovieData();
     }, [userName]);

    return (
        <Container >
            <ImgSlider />
            <Viewers />
            <Recommends data={recommends} />
            <NewDisney data={newDisneys} />
            <Orignals data={originals} />
            <Trending data={trending}/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    background: url("/images/home-background.png") center center / cover  no-repeat fixed !important;
    
    &:after {
        content: '';
        position: absolute;
        inset: 0 px;
        opacity:1 ;
        z-index: -1;
    }

`;




export default Home;