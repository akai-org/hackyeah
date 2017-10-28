import React from 'react';

import Box from '../components/Box';

const AddArticleForm = (props) => (
  <div className="AddArticleForm">
    <Box>
      <form id="addArticleForm" name="addArticleForm">
        <div>
          <label>1. Article type</label>
          <select>
            <option value="money">Money</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </Box>
  </div>
);

export default AddArticleForm;