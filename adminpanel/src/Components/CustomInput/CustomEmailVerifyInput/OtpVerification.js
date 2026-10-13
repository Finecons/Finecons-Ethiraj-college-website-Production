import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const OtpVerification = ({ emailInput, handleVerify, timer, handleResend, otpValues, handleOtpChange, handleKeyDown }) => {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
                {otpValues.map((value, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        style={{
                            borderRadius: '3px',
                            width: '30px',
                            height: '35px',
                            textAlign: 'center',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                ))}
            </div>

            {timer > 0 ? (
                <div>
                    <span style={{ color: '#555', fontSize: '12px' }}>
                        Resend in: {formatTime(timer)}
                    </span>
                    <Button
                        onClick={handleVerify}
                        style={{
                            textTransform: 'none',
                            fontSize: '12px',
                            height: '30px',
                            width: '80px',
                            backgroundColor: '#C38F51',
                            color: 'white',
                            borderRadius: '23px',
                        }}
                    >
                        Verify
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={handleResend}
                    style={{
                        textTransform: 'none',
                        fontSize: '12px',
                        height: '30px',
                        width: '80px',
                        backgroundColor: '#C38F51',
                        color: 'white',
                        borderRadius: '23px',
                    }}
                >
                    Resend OTP
                </Button>
            )}
        </div>
    );
};

export default OtpVerification;
