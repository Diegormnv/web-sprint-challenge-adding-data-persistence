
exports.up = function(knex) {
    return knex.shema
        .createTable('projects', table =>{
            table.increments('project_id')
            table.string('project_name').notNullable().unique()
            table.string('project_description', 500)
            table.boolean('project_completed').defaultTo(false)
        })
        .createTable('resources', table =>{
            table.increments('resource_id')
            table.string('resource_name', 150).notNullable().unique()
            table.string('resource_description', 350)
        })
        .createTable('tasks', table =>{
            table.increments('task_id')
            table.string('task_description').notNullable()
            table.string('task_notes')
            table.boolean('task_completed').defaultTo(false)
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .refrences('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
        })
        .createTable('project_resources', table =>{
            table.increments('project_resource_id')
            table.integer('projcet_id')
                .unsigned()
                .notNullable()
                .refrences('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
            table.integer('resource_id')
            .unsigned()
            .notNullable()
            .refrences('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExist('project_resources')
    .dropTableIfExist('tasks')
    .dropTableIfExist('resources')
    .dropTableIfExist('projects')
};
