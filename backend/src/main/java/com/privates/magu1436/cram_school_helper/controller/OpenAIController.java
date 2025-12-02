package com.privates.magu1436.cram_school_helper.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.responses.Response;
import com.openai.models.responses.ResponseCreateParams;
import com.privates.magu1436.cram_school_helper.form.FormForCreatingComment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping("/openai")
public class OpenAIController {

    private String model = "4o-mini";
    private String prompt = "";

    @PostMapping("/createComment")    
    public ResponseEntity<String> createComment(@RequestBody FormForCreatingComment form){
        OpenAIClient client = OpenAIOkHttpClient.fromEnv();

        ResponseCreateParams params = ResponseCreateParams.builder()
                                            .model(this.model)
                                            .input(this.prompt)
                                            .build();
        Response response = client.responses().create(params);
        return ResponseEntity.ok(response.toString());
    }
}
