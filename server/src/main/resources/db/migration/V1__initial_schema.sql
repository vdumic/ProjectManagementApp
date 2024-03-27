CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "password" text NOT NULL,
    "full_name" VARCHAR(20) NOT NULL,
    "public_name" VARCHAR(20),
    "job_title" VARCHAR(20),
    PRIMARY KEY("id")
);

CREATE TABLE "project" (
    "id" UUID NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(100),
    "created_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    PRIMARY KEY("id")
);

CREATE TABLE "role" (
    "id" UUID NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "on_project" (
    "user_id" UUID references "user"("id"),
    "project_id" UUID references "project"("id"),
    "role_id" UUID references "role"("id"),
    PRIMARY KEY("user_id", "project_id")
);

CREATE TABLE "status" (
    "id" UUID NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "priority" (
    "id" UUID NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE "task" (
    "id" UUID NOT NULL,
    "project_id" UUID references "project"("id"),
    "status_id" UUID references "status"("id"),
    "priority_id" UUID references "priority"("id"),
    "created_by" UUID references "user"("id"),
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT now()::timestamp(0),
    "start_date" DATE,
    "end_date" DATE,
    "story_points" INTEGER NOT NULL,
    PRIMARY KEY("id")
);