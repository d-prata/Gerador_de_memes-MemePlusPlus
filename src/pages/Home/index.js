import qs from 'qs';
import React, { useEffect, useState } from 'react';
import logoBoy from '../../images/logoBoy.png';
import { Button, Card, Form, Templates, Wrapper } from "./styles";

export default function Home() {
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [boxes, setBoxes] = useState([])
    const [generatedMeme, setGeneratedMeme] = useState(null);
    
    useEffect(() => {
        (async () => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const { data: { memes } } = await resp.json();
            setTemplates(memes);
        })(); 
    }, []);

    const handleInputChange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    };

    function handleSelectTemplate(template) {
        setSelectedTemplate(template);
        setBoxes([]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const params = qs.stringify({
            template_id: selectedTemplate.id,
            username: 'dprata',
            password: 'dprata22',
            boxes: boxes.map(text => ({ text })),
        });

        const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
        const {data: {url}} = await resp.json();

        setGeneratedMeme(url);
    }

    function handleReset() {
        setSelectedTemplate(null);
        setBoxes([]);
        setGeneratedMeme(null);
    }
    
    return (
        <Wrapper>
            <img src={logoBoy} alt="Meme++Logo" />
            <Card>
                {generatedMeme && (
                    <>
                        <img src={generatedMeme} alt='Generated Meme' /> 
                        <Button type='button' onClick={handleReset}>Criar novo Meme++</Button>
                    </>
                )}
            
                {!generatedMeme && (
                    <>
                        <h2>Selecione um template</h2>
                        <Templates>
                            {templates.map((template) => (
                                <button
                                    key={template.id}
                                    type='button'
                                    onClick={() => handleSelectTemplate(template)}
                                    className={template.id === selectedTemplate?.id ? 'selected' : ''}
                                    >
                                    <img src={template.url} alt={template.name} />
                                </button>
                            ))}
                        </Templates> 
                        {selectedTemplate && (
                            <>
                                <h2>Textos</h2>
                                <Form onSubmit={handleSubmit}>
                                    {(new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                                    <input
                                    key={String(Math.random())}
                                    placeholder={`Texto - ${index + 1}`}
                                    onChange={handleInputChange(index)}
                                    />
                                     ))}
                                                
                                    <Button type='submit'>Criar Meme++</Button>
                                </Form>  
                            </>
                        )}
                    </>
                )}
            </Card>
        </Wrapper>
    );
}