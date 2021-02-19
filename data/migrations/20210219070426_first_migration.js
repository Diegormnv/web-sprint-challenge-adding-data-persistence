
exports.up = function(knex) {
    return knex.shema
    .createTable('projects', table =>{
        table.increments('project_id')
        table.string('project_name').notNullable().unique()
        table.string('project_description', 500)
        table.boolean('project_completed')
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
        table.boolean('task_completed')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .refrences('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExist('tasks')
    .dropTableIfExist('resources')
    .dropTableIfExist('projects')

};
