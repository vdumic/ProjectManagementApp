ALTER TABLE "task"
ADD "assigned_to" UUID references "user"("id");