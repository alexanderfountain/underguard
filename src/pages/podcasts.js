// import React, { useState, useEffect } from 'react'
// import { Link, graphql } from 'gatsby'
// import Helmet from 'react-helmet'
// import Layout from '../components/layout/layout'
// import Container from '../components/layout/container'
// import styled from 'styled-components'
// import { Howl, Howler } from 'howler'

// const PlayPause = ({ isPlaying, onClick }) =>
//   isPlaying ? (
//     <img
//       src="https://cdn.iconscout.com/icon/free/png-256/pause-1809817-1535940.png"
//       className="w-12 h-12 cursor-pointer"
//       onClick={onClick}
//     />
//   ) : (
//     <img
//       src="https://icons-for-free.com/iconfiles/png/512/play+icon-1320184953284378621.png"
//       className="w-12 h-12 cursor-pointer"
//       onClick={onClick}
//     />
//   )

// const Podcast = ({
//   podcast,
//   isPlaying,
//   playingPodcastId,
//   setPlayingPodcastId,
// }) => {
//   return (
//     <div className="flex justify-between border-b pb-8 mb-8 max-w-3xl min-w-3xl">
//       <div className="flex">
//         <img src={podcast.image} className="w-40 h-40" />
//         <div className="flex flex-col ml-4 w-3/5">
//           <div className="text-lg font-semibold text-gray-900">
//             {podcast.title}
//           </div>
//           <div className="text-sm text-gray-800 mt-2">
//             {podcast.description}
//           </div>
//         </div>
//       </div>
//       <PlayPause
//         isPlaying={isPlaying}
//         onClick={() =>
//           isPlaying && playingPodcastId === podcast.id
//             ? setPlayingPodcastId(null)
//             : setPlayingPodcastId(podcast.id)
//         }
//       />
//     </div>
//   )
// }

// export default function PodcastsPage({ data }) {
//   console.log('data')
//   console.log(data)
//   console.log('data.edges')
//   console.log(data.allMarkdownRemark.nodes)

//   const podcasts = data.allMarkdownRemark.nodes

//   const [playingPodcastId, setPlayingPodcastId] = useState(null)
//   const [playingPodcastAudio, setPlayingPodcastAudio] = useState(null)

//   useEffect(() => {
//     if (playingPodcastAudio && playingPodcastId === null) {
//       playingPodcastAudio.pause()
//     }
//   }, [playingPodcastId])

//   useEffect(() => {
//     if (playingPodcastAudio) {
//       playingPodcastAudio.pause()
//     }

//     if (playingPodcastId) {
//       console.log(playingPodcastId)
//       console.log(podcasts.find(podcast => podcast.id === playingPodcastId))
//       var sound = new Howl({
//         src: [podcasts.find(podcast => podcast.id === playingPodcastId).audio],
//       })

//       sound.play()
//       setPlayingPodcastAudio(sound)

//       console.log('ye')
//     }
//   }, [playingPodcastId])

//   return (
//     <Layout>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Underguard Teleservices | Blog</title>
//         <link rel="canonical" href="https://ugteleservices.com/blog"></link>
//       </Helmet>
//       <section
//         className="section flex flex-col items-center mb-24"
//         style={{ minHeight: '90vh', paddingTop: 80 }}
//       >
//         <h1 className="text-gray-900 font-bold text-3xl mb-20 mt-20">
//           Podcasts
//         </h1>
//         <div className="w-full flex justify-center">
//           <div className="w-5/6 flex flex-col items-center">
//             {podcasts.map(podcast => (
//               <Podcast
//                 podcast={podcast}
//                 key={podcast.id}
//                 isPlaying={playingPodcastId === podcast.id}
//                 playingPodcastId={playingPodcastId}
//                 setPlayingPodcastId={setPlayingPodcastId}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query PodcastQuery {
//     allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "podcast" } } }
//     ) {
//       nodes {
//         id
//         fields {
//           slug
//         }
//         frontmatter {
//           date
//           author
//           title
//           description
//           audio
//         }
//       }
//     }
//   }
// `

// const podcasts = [
//   {
//     id: 1,
//     image:
//       'https://podcasts.dalestillman.com/img/podcast-images/obsessed-with.png',
//     title: "Line of Duty Series 6: We're Back with Craig Parkinson",
//     description:
//       'Join Craig Parkinson as he interrogates every episode and delves deep into Line of Duty',
//     audio: '/assets/git 2 eq.mp3',
//   },
//   {
//     id: 2,
//     image: 'https://podcasts.dalestillman.com/img/podcast-images/exponent.png',
//     title: `“Social Media Is a Great Way to Connect" + "The Cause the Cure” feat. Weruche Opia and Paapa Essiedu`,
//     description:
//       'Join Craig Parkinson as he interrogates every episode and delves deep into Line of Duty',
//     audio: '/assets/fuckbobby.mp3',
//   },
//   {
//     id: 3,
//     image:
//       'https://podcasts.dalestillman.com/img/podcast-images/recode-decode.png',
//     title: `“Happy Animals + Line Spectrum Border” feat. Candice Carty-Williams`,
//     description:
//       'Join Craig Parkinson as he interrogates every episode and delves deep into Line of Duty',
//     audio: '/assets/digiloop.mp3',
//   },
// ]
