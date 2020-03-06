import React from 'react';

import LayoutChair from '../../layout-elements/layout-chair';
import { FormGroup, FormControl, FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

const ElementControls = (props: any) => {

    const elements = ['chair', 'wall'];

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Element Types</FormLabel>
            <FormGroup aria-label="positon" row>
                {/* <FormControlLabel
                    value="Chair"
                    control={<Checkbox color="primary" />}
                    label="Chair"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="Wall"
                    control={<Checkbox color="primary" />}
                    label="Wall"
                    labelPlacement="start"
                /> */}
                <FormControlLabel
                    value="Chair"
                    control={<LayoutChair />}
                    label="Chair "
                    labelPlacement="start"
                />
                
            </FormGroup>
        </FormControl>
    )
}

export default ElementControls;