ALTER TABLE project
ADD updated_at TIMESTAMP NOT NULL DEFAULT now()::timestamp(0);

ALTER TABLE task
ADD updated_at TIMESTAMP NOT NULL DEFAULT now()::timestamp(0);