import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';

export default function Login() {
    return (
        <div>
            <Stack spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button variant="contained">Login</Button>

                </Stack>
            </Stack>

        </div>
    )
}
