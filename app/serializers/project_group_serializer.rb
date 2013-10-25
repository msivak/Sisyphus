class ProjectGroupSerializer < BaseSerializer
  embed :ids, include: true
  attributes :id, :name

  has_one :project, embed_key: :mongo_id
  has_many :students, embed_key: :mongo_id
  has_many :subtasks, embed_key: :mongo_id
end