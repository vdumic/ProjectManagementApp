ALTER TABLE "task"
DROP COLUMN "name";

ALTER TABLE "task"
ADD COLUMN "name" VARCHAR(200) NOT NULL;