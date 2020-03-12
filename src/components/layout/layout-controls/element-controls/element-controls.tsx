import React from 'react';

import LayoutBlock from '../../layout-block/layout-block';
import { LayoutTypes } from '../../layout-elements/layout-types/layout-types';
import { FormGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

const ElementControls = () => {

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Element Types</FormLabel>
            <FormGroup aria-label="positon" row>
                <FormControlLabel
                    value="Chair"
                    control={<LayoutBlock type={LayoutTypes.CHAIR} control/>}
                    label="Chair "
                    labelPlacement="start"
                />
                
            </FormGroup>
        </FormControl>
    )
}

export default ElementControls;