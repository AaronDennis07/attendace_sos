package com.aaron.server.errorHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ApiRequestError {


    @ExceptionHandler(ErrorException.class)
    public ResponseEntity handleException(ErrorException e) {
        Error error = new Error(HttpStatus.BAD_REQUEST,e.getMessage());

        return new ResponseEntity<>(error,error.getHttpStatus());
    }


}