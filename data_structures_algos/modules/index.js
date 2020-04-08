const LinkedList = require('./LinkedList')
const HashTable = require('./HashTable')
const Stack = require('./Stack')
const Queue = require('./Queue')
const TreeTraversal = require('./BinaryTreeTraversal')
const BinarySearchTree = require('./BinarySearchTree')
const Trie = require('./Trie')

module.exports = {
  LinkedList,
  HashTable,
  Stack,
  Queue,
  ...TreeTraversal,
  BinarySearchTree,
  Trie
}