ALTER TABLE "task"
ADD "assigned_to" UUID references "app_user"("id");