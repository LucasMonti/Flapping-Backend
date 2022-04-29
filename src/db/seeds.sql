USE  flapping;

INSERT INTO status (status_id, name) VALUES (1, 'Generada');
INSERT INTO status (status_id, name) VALUES (2, 'En proceso');
INSERT INTO status (status_id, name) VALUES (3, 'Finalizada');
INSERT INTO status (status_id, name) VALUES (4, 'Rechazada');
INSERT INTO status (status_id, name) VALUES (5, 'Cancelada');

INSERT INTO roles (rol_id, name) VALUES (1, 'Usuario');
INSERT INTO roles (rol_id, name) VALUES (2, 'Referente');
INSERT INTO roles (rol_id, name) VALUES (3, 'Administrador');

INSERT INTO users (user_id, rol_id, name, lastname, email, password, wallet_address, created_at, updated_at, deleted_at) VALUES (1,1,'Nico','Clemente','nico@example.com', '12345', 'nicoWallet', NOW(), NOW(), null);
INSERT INTO users (user_id, rol_id, name, lastname, email, password, wallet_address, created_at, updated_at, deleted_at) VALUES (2,1,'Lucas','Monti','lucas@example.com', '12345', 'lucasWallet', NOW(), NOW(), null);
INSERT INTO users (user_id, rol_id, name, lastname, email, password, wallet_address, created_at, updated_at, deleted_at) VALUES (3,1,'Diego','Monti','diego@example.com', '12345', 'diegoWallet', NOW(), NOW(), null);
INSERT INTO users (user_id, rol_id, name, lastname, email, password, wallet_address, created_at, updated_at, deleted_at) VALUES (4,1,'Carlos','Clemente','carlos@example.com', '12345', 'carlosWallet', NOW(), NOW(), null);

INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (1,"Emma", "Remedios para emmita", 5000, 1, "walletEmmita", 1, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (2,"Corrientes", "Incendios en Corrientes", 10000, 2, "walletBomberosCorrientes", 2, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (3,"Comunidad Wichi", "Ambulancia para comunidad indigena", 8000, 1, "walletWichis", 3, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (4,"Atletismo", "Vuelo para juegos Olimpicos", 7000, 2, "walletAtletas", 4, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (5,"Emma", "Remedios para emmita", 15000, 2, "walletEmmita", 1, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (6,"Corrientes", "Incendios en Corrientes", 100000, 1, "walletBomberosCorrientes", 2, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (7,"Comunidad Wichi", "Ambulancia para comunidad indigena", 80000, 2, "walletWichis", 3, NOW(), NOW(), null);
INSERT INTO challenges (challenge_id, title, description, target_amount, status_id, benefactor, referente_id, created_at, updated_at, deleted_at) VALUES (8,"Atletismo", "Vuelo para juegos Olimpicos", 70000, 1, "walletAtletas", 4, NOW(), NOW(), null);