
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';

type Props = {
    className?: string,
    fill?: string,
    style?: CSSProperties,
    onClick?: React.MouseEventHandler<SVGSVGElement>
}

export default function MutedIcon(props: Props) {
    return (
        <svg
            {...props}
            style={props.style}
            className={props.className}
            fill={props.fill}
            viewBox='1.25 0.49 13.5 14.26'
            role='img'
            onClick={props.onClick}
        >
            <path d='M13.256 7.2438C13.256 8.1078 13.028 8.9298 12.572 9.7098L11.654 8.7918C11.87 8.2758 11.978 7.7598 11.978 7.2438H13.256ZM10.25 7.3698L5.75 2.8878V2.7438C5.75 2.3358 5.852 1.9638 6.056 1.6278C6.26 1.2798 6.53 1.0038 6.866 0.799804C7.214 0.595804 7.592 0.493804 8 0.493804C8.408 0.493804 8.78 0.595804 9.116 0.799804C9.464 1.0038 9.74 1.2798 9.944 1.6278C10.148 1.9638 10.25 2.3358 10.25 2.7438V7.3698ZM2.204 1.2498L14.75 13.7958L13.796 14.7498L10.664 11.5998C10.1 11.9478 9.464 12.1758 8.756 12.2838V14.7498H7.244V12.2838C6.428 12.1638 5.678 11.8638 4.994 11.3838C4.31 10.9038 3.77 10.3098 3.374 9.6018C2.954 8.8578 2.744 8.0718 2.744 7.2438H4.022C4.022 7.9758 4.214 8.6418 4.598 9.2418C4.958 9.8058 5.438 10.2558 6.038 10.5918C6.65 10.9158 7.304 11.0778 8 11.0778C8.6 11.0778 9.176 10.9458 9.728 10.6818L8.486 9.4398L8 9.4938C7.592 9.4938 7.214 9.3918 6.866 9.1878C6.53 8.9838 6.26 8.7138 6.056 8.3778C5.852 8.0298 5.75 7.6518 5.75 7.2438V6.7038L1.25 2.2038L2.204 1.2498Z'/>
        </svg>
    );
}
