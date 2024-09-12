"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { TileBackground, TileContent } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work';

const Tile = dynamic(() => import('./tile').then((module) => module.Tile), { ssr: false });
const TileWrapper = dynamic(() => import('./tile').then((module) => module.TileWrapper), { ssr: false });

const Works = () => {
  const [shouldRenderClient, setShouldRenderClient] = useState(false);

  useEffect(() => {
    setShouldRenderClient(true);
  }, []);

  const renderContentServer = ({ progress }: { progress: number }) => <span>{progress}</span>;

  return (
    <TileWrapper numOfPages={3}>
      <TileBackground><WorkBackground /></TileBackground>
      <TileContent>
        {shouldRenderClient ? (
          <Tile page={0}
           renderContent={({ progress }) => (
          <WorkContainer>
            
             <WorkLeft progress={progress}>
                <div>We built</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tighter'><WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>&apos;s app</div>
             </WorkLeft>
             <WorkRight progress={progress}>
                <Image  src="/pinkpanda.webp" layout="responsive" width={840} height={1620} alt="pink Panda"/>
             </WorkRight>
          </WorkContainer>
        )} />
        ) : (
          <Tile page={0} renderContent={renderContentServer} />
        )}
         {shouldRenderClient ? (
          <Tile page={1}
           renderContent={({ progress }) => 
           <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We made</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tighter'>Steakwallet&nbsp; faster.</div>
             </WorkLeft>
             <WorkRight progress={progress}>
                <Image  src="/page1.png" layout="responsive" width={840} height={1620} alt="Steak Walet"/>
             </WorkRight>
             
          </WorkContainer> } />
        ) : (
          <Tile page={1} renderContent={renderContentServer} />
        )}
         {shouldRenderClient ? (
          <Tile page={2}
           renderContent={({ progress }) => 
           <WorkContainer>
           <WorkLeft progress={progress}>
            <div>we helped</div>
           <div className='text-4xl md:text-5xl font-semibold tracking-tighter'>Showtime ship faster.</div>
           </WorkLeft>
           <WorkRight progress={progress}>
                <Image  src="/showtime.webp" layout="responsive" width={840} height={1620} alt="Showtime"/>
             </WorkRight>

           
        </WorkContainer> } />
        ) : (
          <Tile page={2} renderContent={renderContentServer} />
        )}
      </TileContent>
     
    </TileWrapper>
  );
};

export default Works;


