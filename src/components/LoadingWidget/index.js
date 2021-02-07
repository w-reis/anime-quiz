import React from 'react';
import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Loading ...
      </Widget.Header>

      <Widget.Content>
        [Challenge]
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
