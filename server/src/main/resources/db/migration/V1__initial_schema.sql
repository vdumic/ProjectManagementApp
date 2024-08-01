CREATE TABLE "app_user" (
    "id" UUID NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "passkey_id" VARCHAR(250),
    "login" VARCHAR(250),
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "organization" VARCHAR(50),
    "job_title" VARCHAR(50),
    PRIMARY KEY("id")
);

CREATE TABLE "project" (
    "id" UUID NOT NULL,
    "created_by" UUID references "app_user"("id"),
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "created_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    PRIMARY KEY("id")
);

CREATE TABLE "role" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "on_project" (
    "user_id" UUID references "app_user"("id"),
    "project_id" UUID references "project"("id"),
    "role_id" UUID references "role"("id"),
    PRIMARY KEY("user_id", "project_id")
);

CREATE TABLE "status" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "project_status" (
    "project_id" UUID references "project"("id"),
    "status_id" UUID references "status"("id"),
    PRIMARY KEY("project_id", "status_id")
);

CREATE TABLE "priority" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "task" (
    "id" UUID NOT NULL,
    "project_id" UUID references "project"("id"),
    "status_id" UUID references "status"("id"),
    "priority_id" UUID references "priority"("id"),
    "created_by" UUID references "app_user"("id"),
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    "updated_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    "start_date" DATE,
    "end_date" DATE,
    "story_points" INTEGER NOT NULL,
    PRIMARY KEY("id")
);