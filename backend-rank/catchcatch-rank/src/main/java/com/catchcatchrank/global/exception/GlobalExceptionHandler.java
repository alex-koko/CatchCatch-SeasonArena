package com.catchcatchrank.global.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.catchcatchrank.global.util.HttpResponseUtil;

import lombok.RequiredArgsConstructor;

@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    private final HttpResponseUtil responseUtil;

    @ExceptionHandler(ExceptionResponse.class)
    public ResponseEntity<?> handlerException(ExceptionResponse e) {
        Map<String, Object> errorMap = new HashMap<>();
        errorMap.put("errorCode", e.getCustomException().getErrorCode());
        errorMap.put("errorMessage", e.getCustomException().getErrorMessage());
        errorMap.put("statusNum", e.getCustomException().getStatusNum());
        return responseUtil.errorResponse(HttpStatus.valueOf(e.getCustomException().getStatusNum()), errorMap);
    }
}
