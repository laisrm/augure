import React, { useState, useEffect } from "react";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as H from './styled'
import logosolo from '../../images/logosolo.png'
import { useNavigate } from "react-router-dom";





const HomePage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const [image, setImage] = useState("")
    const [data, setData] = useState(undefined)
    const [frontCard, setFrontCard] = useState(true)
    const [cards, setCards] = useState([])
    const [pickedCard, setPickedCard] = useState([])
    const [open, setOpen] = useState(false);

    console.log(pickedCard)

    const getData = () => {
        axios
            .get("tarot.json")
            .then((response) => {
                setData(response.data);
                setCards(response.data.cards)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData()
    }, []);

    const flipCard = () => {
        setFrontCard(!frontCard)
        shuffleCards()
    }

    const shuffleCards = () => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        setCards(cards)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const pickCard = (card) => {
        setPickedCard(card)
        handleClickOpen(card)
    }

    const showCards = cards && cards.map((card) => {
        return (
            <div onClick={() => { pickCard(card) }}>
                <H.ImageSize>
                    <img src={frontCard ? `${data.imagesUrl}${card.image}` : data.imageBackCard} />
                </H.ImageSize>
            </div>
        )
    })

    return (
        <H.Page>
            <H.ContainerButton>
                <H.Solo src={logosolo} onClick={goBack} />
                <H.Button onClick={goBack}>
                    <H.Dentro>
                        HOME
                    </H.Dentro>
                </H.Button>
            </H.ContainerButton>
            <br /><br /><br />
            <H.ButtonStyle color="primary" variant="contained" onClick={flipCard}>
                <strong><u>Novo jogo</u></strong>
            </H.ButtonStyle>

            <H.CardContainer>
                {showCards}
            </H.CardContainer>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <H.DialogStyled>
                    <DialogTitle id="alert-dialog-title">{pickedCard.name}</DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        {data && <img src={`${data.imagesUrl}${pickedCard.image}`} />}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {pickedCard.significado}
                    </DialogContentText>
                </H.DialogStyled>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </H.Page >
    )
}

export default HomePage