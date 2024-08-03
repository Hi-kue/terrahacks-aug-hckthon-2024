const requestTemplate: any = (model: string, content: string | null) => ({
    "messages": [
        {
            "role": "user",
            "content": content
        },
    ],
    model: model,
});

export default requestTemplate;