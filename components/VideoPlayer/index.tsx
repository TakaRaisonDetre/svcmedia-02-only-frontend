
import React, {useRef, useState, useEffect} from 'react'
import styles from './styles'
import {Episode} from '../../types'
import {Video } from 'expo-av' 
import{Playback} from 'expo-av/build/AV'
//import {Storage} from 'aws-amplify'

interface VideoPlayerProps {
    episode :Episode
}

const VideoPlayer = (props: VideoPlayerProps) => {
    
    const {episode} = props;

    const [videoUrl, setVideoUrl]=useState('')

    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({})

  

    // useEffect(()=>{
    //     if(episode.video.startsWith('http')){
    //         setVideoUrl(episode.video);
    //         return;
    //     }
    //     Storage.get(episode.video).then(setVideoUrl);
    // },[episode])

    useEffect(()=>{
         if(!video){
             return;
         }    
             (async () =>{
             await video?.current?.unloadAsync();
             await video?.current?.loadAsync(
                 {uri:episode.video},
                 {},
                 false
             )
     })();
     },[episode])

    console.log(videoUrl)



    return (
       
        <Video
           ref={video}
           style={styles.video}
           source ={{
               uri:episode.video,
           }}
             posterSource={{
                 uri:episode.poster,
             }}
            posterStyle={{
              resizeMode:'cover'
          }}
           usePoster={true}
           useNativeControls
           resizeMode="contain"
           onPlaybackStatusUpdate={status => setStatus(() => status)}    
           />

        
    )
}

export default VideoPlayer