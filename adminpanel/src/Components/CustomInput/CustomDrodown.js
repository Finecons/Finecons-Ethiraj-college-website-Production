import React from 'react'

const CustomDrodown = () => {
    return (
        <div>
            <FormControl fullWidth margin="normal" error={touched.subject && Boolean(errors.subject)}>
                <InputLabel>Subject</InputLabel>
                <Field
                    as={Select}
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    endAdornment={<ArrowDropDownIcon />}
                >
                    <MenuItem value="Mathematics">
                        <BookIcon /> Mathematics
                    </MenuItem>
                    <MenuItem value="English">
                        <BookIcon /> English
                    </MenuItem>
                    {/* Add more subjects as needed */}
                </Field>
                <FormHelperText><ErrorMessage name="subject" /></FormHelperText>
            </FormControl>
        </div>
    )
}

export default CustomDrodown