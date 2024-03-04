import './App.css';
import FundamentalConceptsInGenAI from './posts/Fundamental_Concepts_in_GenAI'
import HowToAvoidAClimateDisaster from './posts/How_to_Avoid_a_Climate_Disaster';
import ThoughtsOnSalesEngineering from './posts/Thoughts_on_Sales_Engineering';
import frontMatter from 'front-matter';
import { useState, useEffect } from 'react';

const PostList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <FundamentalConceptsInGenAI />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <HowToAvoidAClimateDisaster />
      </div>
      <div style={{ flex: '0 0 47%', marginBottom: '3%' }}>
        <ThoughtsOnSalesEngineering />
      </div>
    </div>
  );
}

export default PostList;