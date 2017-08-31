import React from 'react';

export default (props) => {
  if (props.attachments.length) {
    return (
      <div className="attachments">
        <span>Attachments:</span>
        {props.attachments.map((attachment) => {
          const link = `http://localhost:9001/download/${attachment.cid}`
          console.log('attachment', attachment);
          return (
            <a href={link} target="_blank" key={attachment.cid}>
              {attachment.filename}
            </a>
          );
        })}
      </div>
    )
  }
  else {
    return null;
  }
}
