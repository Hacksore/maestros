import type { ReactNode } from 'react';
import React, { memo } from 'react';
import type { NodeProps } from 'reactflow';
import { Handle, Position } from 'reactflow';

export interface TurboNodeData {
  id: string;
  title: string;
  icon?: ReactNode;
  subline?: string;
}

export default memo(
  ({ data, sourcePosition, targetPosition }: NodeProps<TurboNodeData>) => {
    return (
      <div className="wrapper gradient" id={data.id}>
        <div className="inner" id={data.id}>
          <div className="body" id={data.id}>
            {data.icon ? <div className="icon">{data.icon}</div> : null}
            <div>
              <div className="title">{data.title}</div>
              {data.subline ? (
                <div className="subline">{data.subline}</div>
              ) : null}
            </div>
          </div>
          <Handle position={sourcePosition!} type="target" />
          <Handle position={targetPosition!} type="source" />{' '}
        </div>
      </div>
    );
  },
);
