import React from "react";

const Card = ({userName, petName}) => {
    return (
        <div>
            Se ha registrado a {userName} junto a su mascota {petName} exitosamente
        </div>
    )
};

export default Card;