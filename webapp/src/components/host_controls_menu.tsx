import React from 'react';
import {useIntl} from 'react-intl';
import {makeHost, muteSession} from 'src/actions';
import {DropdownMenuItem} from 'src/components/dot_menu/dot_menu';
import {StyledMonitorAccount} from 'src/components/expanded_view/styled_components';
import CompassIcon from 'src/components/icons/compassIcon';
import styled from 'styled-components';

type Props = {
    callID?: string;
    userID: string;
    sessionID: string;
    isMuted: boolean;
}

export const HostControlsMenu = ({callID, userID, sessionID, isMuted}: Props) => {
    const {formatMessage} = useIntl();

    if (!callID) {
        return null;
    }

    const muteUnmute = isMuted ? null : (
        <DropdownMenuItem onClick={() => muteSession(callID, sessionID)}>
            <StyledCompassIcon icon={'microphone-off'}/>
            {formatMessage({defaultMessage: 'Mute participant'})}
        </DropdownMenuItem>
    );

    // TODO: don't show 'make host' for host; keeping for now bc we will show other menu items next
    return (
        <>
            {muteUnmute}
            <DropdownMenuItem onClick={() => makeHost(callID, userID)}>
                <StyledMonitorAccount/>
                {formatMessage({defaultMessage: 'Make host'})}
            </DropdownMenuItem>
        </>
    );
};

const StyledCompassIcon = styled(CompassIcon)`
    color: var(--center-channel-color-56);
    font-size: 16px;
    margin-right: 7px;
    margin-left: -1px;
    margin-top: 2px;
`;
