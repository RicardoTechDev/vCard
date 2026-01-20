import { Link } from "react-router-dom";
import { Container, Segment, Header, Icon, Button } from "semantic-ui-react";

export function Error404() {
    return (
        <Container text style={{ marginTop: "5rem" }}>
            <Segment padded="very" textAlign="center">
                <Icon name="warning circle" size="huge" />

                <Header as="h1" style={{ marginTop: "1rem" }}>
                    404 - Página no encontrada
                </Header>

                <Header as="h3" color="grey">
                    La ruta que intentaste visitar no existe o fue movida.
                </Header>

                <div style={{ marginTop: "2rem" }}>
                    <Button as={Link} to="/" primary size="large">
                        <Icon name="home" />
                        Volver al inicio
                    </Button>

                    <Button as={Link} to={-1} basic size="large" style={{ marginLeft: "0.75rem" }}>
                        <Icon name="arrow left" />
                        Volver atrás
                    </Button>
                </div>
            </Segment>
        </Container>
    );
}
